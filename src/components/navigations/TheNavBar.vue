<template>
    <div class="navbar navbar-dark d-flex justify-content-end p-2 m-0">
        <div style="min-width: 10rem;">
            <img 
                src="../../assets/avatar.png"  
                alt="user avatar"
                width="42"
                class="rounded-circle"/>
            <span 
                class="username text-start" 
                v-text="user.name"
            ></span>   
        </div>
    </div>
    <div class="navbar navbar-light shadow-sm">
        <div class="container-fluid">
            <span class="navbar-brand py-2 m-0 h1">
                {{title}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'vendeurs'
        }
    },
    data () {
        return {
            user: {
                name: 'tafita raza'
            }
        }
    }
}
</script>

<style scoped>
.username {
    margin-left: 10%;
    font-weight: bolder;
    text-transform: capitalize;
    color: #fcfcfc;
}

.navbar-dark {
    background-color: #1563c3;
}

.navbar-light {
    background-color: #fcfcfc;
}

.navbar-brand::first-letter {
    text-transform: uppercase;
}
</style>