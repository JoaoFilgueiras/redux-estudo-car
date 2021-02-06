import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

export default function AlertComp() {
    const message = useSelector((state) => state.layout);
    return (
        <Fragment>
            { message.showMessage && (
                <div className="container mt-3">
                    <div className={`alert alert-${message.message_type}`} role="alert">
                        {message.message_desc}
                    </div>
                </div>
            )}
        </Fragment>
    )
}