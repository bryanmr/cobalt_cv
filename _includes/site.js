/* exported toggleRole */
'use strict';
/** Shows the elements labeled with the role
 * @param {string} role - The name of the class to display */
function toggleRole(role) {
  if (document.getElementById(role+'_link').classList.contains('active')) {
    document.getElementById(role+'_link').classList.remove('active');
  } else {
    document.getElementById(role+'_link').classList.add('active');
  }

  try {
    let displayValue = '';
    if (document.querySelectorAll('.'+role)[0].style.display != 'block') {
      displayValue = 'block';
    } else {
      displayValue = 'none';
    }
    document.querySelectorAll('.'+role).forEach((roleDiv) => {
      roleDiv.style.display = displayValue;
    });
  } catch (e) {
    console.log('Nothing found for '+role);
  }
}
