export function convertLoggerGoResponse2JS(item: any): any {
    if (Array.isArray(item)) {
        return convertLoggersGoResp2JS(item);
    } else {
        return convertLoggerGoResp2JS(item);
    }
}

export function convertLoggersGoResp2JS(loggers: GoAPI.Logger[]): API.Logger[] {
    let jsLoggers: API.Logger[] = [];
    for (let i = 0; i < loggers.length; i++) {
        jsLoggers.push(convertLoggerGoResp2JS(loggers[i]));
    }
    return jsLoggers;
}

export function convertLoggerGoResp2JS(logger: GoAPI.Logger): API.Logger {
    let jsLogger: API.Logger = {}
    Object.assign(jsLogger, logger);
    if (logger.id) {
        jsLogger.id = `${logger.id}`;
    }
    if (logger.user_id) {
        jsLogger.user_id = `${logger.user_id}`;
    }

    return jsLogger;
}