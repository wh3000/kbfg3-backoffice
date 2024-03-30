import { useAccountStore } from "./account"
import { useAuthStore } from "./auth"
import { useCommonStore } from "./common"

export const stores = {
    account : useAccountStore(),
    auth : useAuthStore(),
    common: useCommonStore(),
}


export const Roles = {
    ROLE_MASTER: 'ROLE_MASTER',
    ROLE_HR: 'ROLE_HR',
}
