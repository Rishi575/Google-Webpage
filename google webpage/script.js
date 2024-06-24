function performSearch() {
    const query = document.getElementById('APjFqb').value;
    if (query.trim()!== '') {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(url, '_blank');
    }
}