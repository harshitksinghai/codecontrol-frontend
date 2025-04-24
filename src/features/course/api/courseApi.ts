import secureApi from "../../../app/api/axiosSecure";
import { CommonResponse } from "../../common/utils/commonTypes";

export const courseApi = {
    placeholder1: (ph: string) => 
        secureApi.post<CommonResponse>(`/placeholder`, { ph }),
    placeholder2: (ph: string) => 
        secureApi.post<CommonResponse>(`/placeholder`, { ph }),
}
