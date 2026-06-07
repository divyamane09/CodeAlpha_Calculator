let display = document.getElementById("display");

function appendValue(value)
{
    display.value += value;
}

function clearDisplay()
{
    display.value = "";
}

function deleteLast()
{
    display.value = display.value.slice(0, -1);
}

function calculate()
{
    try
    {
        let expression = display.value;

        let result = eval(expression);

        display.value = result;

        addToHistory(expression + " = " + result);
    }
    catch(error)
    {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event)
{
    let key = event.key;

    // Numbers and operators
    if(
        (key >= '0' && key <= '9') ||
        key == '+' ||
        key == '-' ||
        key == '*' ||
        key == '/' ||
        key == '.'
    )
    {
        appendValue(key);
    }

    // Enter key
    else if(key === "Enter")
    {
        calculate();
    }

    // Backspace
    else if(key === "Backspace")
    {
        deleteLast();
    }

    // Escape key
    else if(key === "Escape")
    {
        clearDisplay();
    }
});

function toggleTheme()
{
    document.body.classList.toggle("dark");
}



function addToHistory(text)
{
    let historyList = document.getElementById("historyList");

    let listItem = document.createElement("li");

    listItem.textContent = text;

    historyList.prepend(listItem);
}