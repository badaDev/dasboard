export interface MenuItem {
    name: string;
    imgUrl: string;
    submenus?: SubMenuItem[];
    active?: boolean;
    expanded?: boolean;
}

export interface SubMenuItem {
    name: string;
}

export interface UserProfile {
    imageUrl: string;
    name: string;
    position: string;
}
