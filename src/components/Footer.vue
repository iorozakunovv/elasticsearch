<template>
    <div class="container ">
        <div class="footer-under-wrapper">

        </div>
        <footer>

            <div class="footer__inner__wrapper">
                <div class="link__wrapper">
                    <a href="#">Telegram: <strong>+996 700 440 022</strong></a>
                </div>

                <div class="link__wrapper">
                    <a href="#"> <strong>iorozakunovv@gmail.com</strong> </a>
                </div>
                <div class="link__wrapper">
                    <a href="#">GitHub: <strong>iorozakunovv</strong> </a>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>

export default {

}
</script>
<style lang="css">
.link__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.link__wrapper a {
    color: rgb(69, 69, 69);
}

.footer__inner__wrapper {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    width: 80vw;
}

.mid-wrapper {
    margin: 40px 0 20px 0;
}

footer {
    height: 50vh;
}</style>