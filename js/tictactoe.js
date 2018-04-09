$(document).ready(function () {

    var grid = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    var computerGame;            //boolean
    var randomGrid;             //computer game choice
    var turnX = true;           // O turn on false

    //disables one player and two player buttons
    function disableBoth() {
        $('#onePlayer').hide();
        $('#twoPlayer').hide();
        $("#message1").hide();
    }

    //one and two player "onClick"
    $("#onePlayer").click(function () {
        computerGame = true;
        disableBoth();
        $(".main").click(onClickOnePlayer);
    });
    $("#twoPlayer").click(function () {
        computerGame = false;
        disableBoth();
        $(".main").click(onClickTwoPlayer)
    });


    function gridSwitch(item, assignment) {
        var index = parseInt(String.fromCharCode(item.charCodeAt(0) - 17));
        grid[index] = assignment;
    }

    //picks computers move randomly
    function assignMove(randomGrid) {
        $("#" + randomGrid).text("O");
        $("#" + randomGrid).prop("disabled", true);
        var index = parseInt(String.fromCharCode(randomGrid.charCodeAt(0) - 17));
        grid[index] = "O";
    }


    //BOTH sets X or O in box and calls f to switch pieces then disables used button
    function onClickTwoPlayer() {
        console.log("running on Click Two Player" + turnX);
        if (turnX === true) {
            $(this).text("X");
            console.log(this.id);
            gridSwitch(this.id, "X");
            console.log("this is the current grid after X was called " + grid);
            winCheck();
            $(this).prop("disabled", true);
            turnX = !turnX;
        } else {
            $(this).text("O");
            console.log(this.id);
            gridSwitch(this.id, "O");
            console.log("this is the current grid after O was called " + grid);
            winCheck();
            $(this).prop("disabled", true);
            turnX = !turnX;
        }
    }

    function onClickOnePlayer() {
        console.log("running on Click One Player" + turnX);
        if (turnX === true) {
            $(this).text("X");
            console.log(this.id);
            gridSwitch(this.id, "X");
            console.log("this is the current grid after X was called " + grid);
            $(this).prop("disabled", true);
            winCheck();
            randomGrid = grid[Math.floor(Math.random() * grid.length)];
            console.log("this is the randomGrid choice " + randomGrid);
            if (randomGrid === "X" || randomGrid === "O") {
                getRandom();
            }
            assignMove(randomGrid);
            winCheck();
        }
    }


    function winCheck() {
        for (i = 0; i < 9; i += 3) {
            if (grid[i] == grid[i + 1] && grid[i + 1] == grid[i + 2]) {
                alert("Game is over " + grid[i] + "has won!");
                $(".main").prop("disabled", true);
                console.log("Game is Over");
            }
        }

        for (i = 0; i < 3; i++) {
            if (grid[i] == grid[i + 3] && grid[i + 3] == grid[i + 6]) {
                alert("Game is over " + grid[i] + " has won!");
                $(".main").prop("disabled", true);
                console.log("Game is Over");
            }
        }

        if (grid[0] == grid[4] && grid[4] == grid[8]) {
            alert("Game is over " + grid[0] + " has won!");
            $(".main").prop("disabled", true);
            console.log("Game is Over");

        }
        if (grid[2] == grid[4] && grid[4] == grid[6]) {
            alert("Game is over " + grid[2] + " has won!");
            $(".main").prop("disabled", true);
            console.log("Game is Over");
        }
        if (drawCheck()) {
            alert("Draw");
        }
    }

    function drawCheck() {
        for (i = 0; i < grid.length; i++) {
            if (grid[i] !== "X" && grid[i] !== "O") {
                return false;
            }
        }
        return true;
    }
});
