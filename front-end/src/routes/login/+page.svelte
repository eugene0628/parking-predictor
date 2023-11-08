<script>
</script>

<div class="big-container">
	<div class="login-box">
        <h2>Login</h2>
        <div>
            <input placeholder="username" />
            <input placeholder="password" type="password" />
        </div>
        <button>
            Go
        </button>
	</div>
</div>

<style>
	:root {
	}

	.big-container {
		padding-top: 100px;
		height: calc(100% - 100px);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.login-box {
		height: 20rem;
		width: 20rem;
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
		border-radius: 5px;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 30px;
	}

    .login-box h2 {
        grid-column: 2/3;
        grid-row:1/2;
        display:flex;
        justify-content:center;
        align-items:center;
    }

	.login-box div {
        grid-column: 2/3;
        grid-row:2/3;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
        gap:20px;
	}

    .login-box div input{
        height:25px;
        border-radius:5px;
        border: 1px black solid;
	}

    .login-box button { 
        align-self:center;
        justify-self:center;
        grid-column: 3/3;
        grid-row:2/3;
        height: 82px;
        width:50px;
        background-color:darkblue;
        color:white;
        border:none;
        border-radius:5px;
        transition: all 100ms ease;
        cursor:pointer;
    }

    .login-box button:hover {
        transform:scale(1.05);
        box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 10px;
    }

    .login-box button:active {
        transform:scale(.95);
    }
</style>
