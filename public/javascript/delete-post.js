async function deleteFormHandler(event) {
    event.preventDefault();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    console.log(event.srcElement.id);
    await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE'
      });  
      alert("Your post was deleted!");
      window.location.replace('/');
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);