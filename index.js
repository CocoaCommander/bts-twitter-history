const onSubmit = e => {
    console.log("sub called")
    e.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAG%2BrcgEAAAAAGht4pC9BALSDjvGsUV89xPERSis%3DpXd4lX6IfJvqfRBk0YY8byMz309exQM50mzfafoQ3t8YZYQ8K8");
    myHeaders.append("Cookie", "guest_id=v1%3A165332939454915648; guest_id_ads=v1%3A165332939454915648; guest_id_marketing=v1%3A165332939454915648; personalization_id=\"v1_Bhh5Mi9r+adomqIfz+WpLg==\"");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://api.twitter.com/2/tweets/search/recent?tweet.fields=created_at,public_metrics&end_time=2022-05-22T12:00:00Z&max_results=40&query=BTS lang:en", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

const init = () => {
    const cloudForm = document.getElementById('cloud-form');
    const trendForm = document.getElementById('trend-form');
    const tweetForm = document.getElementById('tweet-form');
    
    cloudForm.addEventListener('submit', onSubmit);
    trendForm.addEventListener('submit', onSubmit);
    tweetForm.addEventListener('submit', onSubmit);
}

window.onload = init;