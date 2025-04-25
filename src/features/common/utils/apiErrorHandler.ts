export const handleApiError = (error: any) => {
    return { 
      error: { 
        status: error.response?.status, 
        data: error.response?.data?.message || error.message 
      } 
    };
  };
  