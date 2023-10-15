const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the link :  " + link+"\nNow you can share my link to your friends.")
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))

    const shareButtons2 = document.querySelectorAll('.share-button')
    console.log(shareButtons2)
    
    shareButtons2.forEach(shareButton =>
        shareButton.addEventListener('click', copyText))
    