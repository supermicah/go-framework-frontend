declare namespace GoAPI {
    type User = {
        /** Create time */
        created_at?: string;
        /** Unique ID */
        id?: number;
        /** Username for login */
        username?: string;
        /** Name of user */
        name?: string;
        /** Email of user */
        email?: string;
        /** Phone number of user */
        phone?: string;
        /** Remark of user */
        remark?: string;
        /** Roles of user */
        roles?: UserRole[];
        /** Status of user (activated, freezed) */
        status?: string;
        password?: string;
        /** Update time */
        updated_at?: string;
        statusChecked?: boolean;
    };

    type UserRole = {
        /** Create time */
        created_at?: string;
        /** Unique ID */
        id?: number;
        /** From Role.ID */
        role_id?: number;
        /** From Role.Name */
        role_name?: string;
        /** Update time */
        updated_at?: string;
        /** From User.ID */
        user_id?: number;
    };
}