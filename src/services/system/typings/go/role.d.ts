declare namespace GoAPI {
    type Role = {
        /** Code of role (unique) */
        code?: string;
        /** Create time */
        created_at?: string;
        /** Details about role */
        description?: string;
        /** Unique ID */
        id?: number;
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
        id?: number;
        /** From Menu.ID */
        menu_id?: number;
        /** From Role.ID */
        role_id?: number;
        /** Update time */
        updated_at?: string;
    };
}