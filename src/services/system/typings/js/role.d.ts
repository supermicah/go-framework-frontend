declare namespace API {
    type Role = {
        /** Code of role (unique) */
        code?: string;
        /** Create time */
        created_at?: string;
        /** Details about role */
        description?: string;
        /** Unique ID */
        id?: string;
        /** Role menu list */
        menus?: RoleMenu[];
        /** Display name of role */
        name?: string;
        /** Sequence for sorting */
        sequence?: number;
        /** Status of role (disabled, enabled) */
        status?: string;
        /** Update time */
        updated_at?: string;
        statusChecked?: boolean;
    };

    type RoleMenu = {
        /** Create time */
        created_at?: string;
        /** Unique ID */
        id?: string;
        /** From Menu.ID */
        menu_id?: string;
        /** From Role.ID */
        role_id?: string;
        /** Update time */
        updated_at?: string;
    };
}