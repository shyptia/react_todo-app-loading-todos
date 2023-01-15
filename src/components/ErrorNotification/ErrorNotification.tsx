import React, { useEffect } from 'react';
import cn from 'classnames';

type Props = {
  error: string;
  onSetErrorMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const ErrorNotification: React.FC<Props> = (props) => {
  const { error, onSetErrorMessage } = props;

  useEffect(() => {
    setTimeout(() => {
      onSetErrorMessage('');
    }, 3000);
  }, []);

  return (
    <div
      data-cy="ErrorNotification"
      className={cn(
        'notification is-danger is-light has-text-weight-normal',
        { hidden: !error },
      )}
    >
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => onSetErrorMessage('')}
      />
      {error}
    </div>
  );
};
