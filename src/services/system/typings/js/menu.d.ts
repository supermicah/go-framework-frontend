declare namespace API {
    type Menu = {
        /** Child menus */
        children?: Menu[];
        /** Code of menu (unique for each level) */
        code?: string;
        /** Create time */
        created_at?: string;
        /** Details about menu */
        description?: string;
        /** Unique ID */
        id?: string;
        /** Display name of menu */
        name?: string;
        /** Parent ID (From Menu.ID) */
        parent_id?: string;
        /** Parent path (split by .) */
        parent_path?: string;
        /** Access path of menu */
        path?: string;
        /** Properties of menu (JSON) */
        properties?: string;
        /** Resources of menu */
        resources?: MenuResource[];
        /** Sequence for sorting */
        sequence?: number;
        /** Status of menu (disabled, enabled) */
        status?: string;
        /** Type of menu (page, button) */
        type?: string;
        /** Update time */
        updated_at?: string;
        statusChecked?: boolean;
        parent_name?: string;
    };

    type MenuResource = {
        /** Create time */
        created_at?: string;
        /** Unique ID */
        id?: string;
        /** From Menu.ID */
        menu_id?: string;
        /** HTTP method */
        method?: string;
        /** API request path (e.g. /api/v1/users/:id) */
        path?: string;
        /** Update time */
        updated_at?: string;
    };
}