// import React from 'react';

// function Avatar() {
//   return (<img src="https://www.gravatar.com/avatar/nothing" className="avatar" alt="avatar" />);
// }

// export default Avatar;

import React from 'react';

function Avatar({hash}) {
    var url =`https://www.gravatar.com/avatar/${hash}`;
    return (<img src={url} className="avatar" alt="avatar" />);
}

export default Avatar;