<template>
    <div class="navbar bg-light shadow d-flex flex-column justify-content-start">
        <div class="navbar-title pt-2 d-flex">
            <i 
                class="bi bi-check-all" 
                style="font-size: 2rem;"
            ></i>
            <div class="fs-3">
                <span class="fw-bold">G.</span>Vente
            </div>
        </div>
        <div 
            class="navbar-item fs-5 my-2"
            v-for="navbarItem in navbarItems" 
            :key="navbarItem.title"
            :to="{name: navbarItem.route}">
            <base-icon
                :name="navbarItem.icon"
                color="gray"/>
            <span class="text-capitalize">
                {{ ' ' + navbarItem.title }}
            </span>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            navbarItems: [
                {title: 'vendeurs', icon: 'bi-person-badge', route: 'Vendeurs'},
            ]
        }
    }
}
</script>

<style scoped>
.navbar {
    width: 18rem; 
    background-color: #fcfcfc;
}

.navbar-title {
    height: 4.2rem;
    color: #1563c3;
    width: 100%;
    padding-left: 1rem;
    letter-spacing: 0.5em;
}

.navbar-item > .bi {
    margin-left: 0px;

}
</style>