import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const extractNameFromEmail = (email) => {
    const nameParts = email.split('@');
    const firstName = nameParts[0];
    const lastName = nameParts[0];
    return { firstName, lastName };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Extract first name and last name from email
      const { firstName, lastName } = extractNameFromEmail(email);

      // Prepare data for API
      const userData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
      };

      // Send data to API
      const response = await fetch('https://api.dash-aloui.net/api/user/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Check if the request was successful
      if (response.ok) {
        // Show SweetAlert success message
        Swal.fire({
          title: 'Succès!',
          text: 'Adresse e-mail soumise avec succès.',
          icon: 'success',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'custom-confirm-button',
          },
        });

        // Clear the input field
        setEmail('');
      } else {
        // Handle error
        Swal.fire({
          title: 'Erreur!',
          text: 'Une erreur s\'est produite lors de la soumission de l\'adresse e-mail.',
          icon: 'error',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'custom-confirm-button',
          },
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="newsletter-container">
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="VOTRE ADRESSE E-MAIL . . ."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">S'abonner</button>
      </form>
    </div>
  );
};

export default Newsletter;
