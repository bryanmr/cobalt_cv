/* exported toggleRole */
'use strict';

/** Shows the elements labeled with the role
 * @param {string} role - The name of the class to display */
function toggleRole(role) {
  // Change the link display to show we clicked it
  document.getElementById(role+'_link').classList.toggle('active');

  // Change the body
  try {
    const selectedRole = document.querySelectorAll('.'+role);
    selectedRole.forEach((roleDiv) => {
      if (roleDiv.hidden == true) {
        roleDiv.hidden = false;
      } else {
        roleDiv.hidden = true;
      }
    });
  } catch (e) {
    console.log('Nothing found for '+role);
    console.error('Error reported: '+e);
  }
}
