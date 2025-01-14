import axios from "axios";

const API_URL = "http://localhost:8080/appointments";

class AppointmentService {
  // Create an appointment
  async createAppointment(data) {
    try {
      const response = await axios.post(API_URL, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  // Get all appointments
  async getAllAppointments() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  // Get appointment by ID
  async getAppointmentById(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  // Update an appointment
  async updateAppointment(id, data) {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  // Delete an appointment
  async deleteAppointment(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}

export default new AppointmentService();
