import * as React from 'react';

interface OwnProps {
  message: string;
}

export const NoResult = (props: OwnProps) => (
    <div>
        <div className="box">
        <article className="media">
            <div className="content">
            <strong className="has-text-success	">
                {props.message}
            </strong>
            </div>
        </article>
        </div>
        <br />
    </div>
);

export default NoResult;