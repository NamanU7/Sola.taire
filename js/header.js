const header = document.getElementById('navbar');

header.innerHTML = `
<div class="container">
<a href="#" class="logo">Sola.<span class="logo-taire">taire</span>
</a>

<img id="mobile-cta" class="mobile-menu" src="assets/menu.svg" alt="Open Navigation">

<nav>
    <img id="mobile-exit" class="mobile-menu-exit" src="assets/close.svg" alt="Exit Navigation">

    <ul class="primary-nav">
        <li class="current"><a href="index.html">Home</a></li>
        <li><a href="faqs.html">FAQs</a></li>
        <li><a href="roadmap.html">Roadmap</a></li>
    </ul>


    <ul class="secondary-nav">
        <li><a href="#">Community</a></li>
        <li class="mint-cta"><a href="#">Mint</a></li>
    </ul>

</nav>
</div>
`;


