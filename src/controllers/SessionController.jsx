const jwt = require('jsonwebtoken');
const Firebase = require('../utils/firebase');
const UsuarioModel = require('../models/Usuario.jsx');

module.exports = {
  async signIn(request, response) {
    try {
      const { email, password } = request.body;

      let firebaseId;
      try {
        firebaseId = await Firebase.login(email, password);
      } catch (error) {
        return response
          .status(403)
          .json({ notification: "Invalid credentials" });
      }
      const user = await UsuarioModel.getByFields({ firebase_id: firebaseId });

      const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "8h",
      });

      return response.status(200).json({ user, accessToken });
    } catch (error) {
      console.warn(error);
      return response
        .status(500)
        .json({ notification: "Internal server error while trying to get User" });
    }
  }
};