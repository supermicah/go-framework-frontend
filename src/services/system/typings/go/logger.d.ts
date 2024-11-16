declare namespace GoAPI {
    type Logger = {
        /** Create time */
        created_at?: string;
        /** Log data */
        data?: string;
        /** Unique ID */
        id?: number;
        /** Log level */
        level?: string;
        /** Log message */
        message?: string;
        /** Error stack */
        stack?: string;
        /** Log tag */
        tag?: string;
        /** Trace ID */
        trace_id?: string;
        /** User ID */
        user_id?: number;
        /** From User.Name */
        user_name?: string;
        login_name?: string;
    };
}
