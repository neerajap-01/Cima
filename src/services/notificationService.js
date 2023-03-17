/* eslint-disable default-case */
//Sample ANT.DESIGN Notification Service
import { message } from 'antd';

const sendNotification = (type, msg, duration = 0) => {
    switch(type) {
        case 'success' : message.success(msg, duration); break;
        case 'error' : message.error(msg, duration); break;
        case 'warning' : message.warning(msg, duration); break;
    }
}

export {
    sendNotification
}