import secureApi from "../../../app/api/axiosSecure";
import { ExpectedCommonResponse } from "../../common/types/commonTypes";

export const courseApi = {
    placeholder1: (ph: string) => 
        secureApi.post<ExpectedCommonResponse>(`/placeholder`, { ph }),
    placeholder2: (ph: string) => 
        secureApi.post<ExpectedCommonResponse>(`/placeholder`, { ph }),
}
