/* exported toggleRole */
'use strict';

/** Shows the elements labeled with the role
 * @param {string} role - The name of the class to display */
function toggleRole(role) {
  // Change the link display to show we clicked it
  document.getElementById(role+'_link').classList.toggle('active');

  let beHidden = '';
  if (globalShow.has(role)) {
    globalShow.delete(role);
    beHidden = true;
  } else {
    globalShow.add(role);
    beHidden = false;
  }

  // Change the body
  try {
    const selectedRole = document.querySelectorAll('.'+role);
    selectedRole.forEach((roleDiv) => {
      if (beHidden == true) {
        if (!compareSets(roleDiv.classList, globalShow)) {
          roleDiv.hidden = beHidden;
        }
      } else {
        roleDiv.hidden = beHidden;
      }
    });
  } catch (e) {
    console.log('Nothing found for: '+role);
    console.error('Error reported: '+e);
  }

  /** Compares the globalShow and our classList
   * @param {set} setA - The class names to compare the set of values to
   * @param {set} setB - The set of values we don't want to hide
   * @return {boolean} - True if we have a class that is in the globalShow */
  function compareSets(setA, setB) {
    const _diff = new Set(setA);
    for (const elem of setB) {
      if (_diff.has(elem)) {
        return true;
      }
    }
    return false;
  }
}
