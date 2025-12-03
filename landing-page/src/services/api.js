const getAuthToken = () => {
  return localStorage.getItem('token');
};

const getHeaders = (includeAuth = false) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (includeAuth) {
    const token = getAuthToken();
    if (token) {
      headers['x-auth-token'] = token;
    }
  }

  return headers;
};

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg || 'Registration failed');
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg || 'Login failed');
    }

    if (data.token) {
      localStorage.setItem('token', data.token);
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const logoutUser = () => {
  localStorage.removeItem('token');
};

export const isLoggedIn = () => {
  return !!getAuthToken();
};

export const submitFeedback = async (feedbackData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/feedback`, {
      method: 'POST',
      headers: getHeaders(true),
      body: JSON.stringify(feedbackData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg || 'Failed to submit feedback');
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getAllFeedback = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/feedback`, {
      method: 'GET',
      headers: getHeaders(true),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg || 'Failed to fetch feedback');
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};