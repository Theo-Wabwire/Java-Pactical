
const studentName = prompt("Welcome to USIU-Africa! What's your first name?");

if (studentName && studentName.trim() !== "") {
    alert("Karibu, " + studentName + "! 🎉");
    console.log("Student entered name:", studentName);
    document.getElementById("greeting").textContent = "Hello, " + studentName + " 👋";
} else {
    console.log("No name provided, using default greeting");
}


function runEstimator() {
    console.log("=== Starting Campus Cost Estimator ===");
    
    const days = Number(prompt("How many days per week will you come to campus? (e.g., 3, 4, or 5)"));
    const costPerTrip = Number(prompt("Average transport cost per trip in KSh?\n(Matatu from Thika Rd: ~120, Uber from Westlands: ~400)"));
    const snacksPerDay = Number(prompt("How many snacks do you typically buy per day on campus? (e.g., 2)"));
    const snackPrice = Number(prompt("Average price per snack in KSh?\n(Samosa: ~50, Soda: ~80, Lunch: ~300)"));

    
    if (isNaN(days) || isNaN(costPerTrip) || isNaN(snacksPerDay) || isNaN(snackPrice)) {
        alert("Please enter valid numbers. Try again!");
        console.log("Invalid input detected. Estimator cancelled.");
        return;
    }

    
    const transportWeekly = days * costPerTrip * 2; 
    const snacksWeekly = days * snacksPerDay * snackPrice;
    const totalWeekly = transportWeekly + snacksWeekly;
    const save10 = totalWeekly * 0.10; 
    const totalWithSavings = totalWeekly - save10;


    console.log({ 
        days, 
        costPerTrip, 
        snacksPerDay, 
        snackPrice,
        transportWeekly, 
        snacksWeekly, 
        totalWeekly, 
        totalWithSavings 
    });

    const studentID = "USIU" + Math.floor(Math.random() * 10000);

    const summary = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   USIU WEEKLY CAMPUS COST ESTIMATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 Campus Days: ${days} days/week
🚌 Transport (Round Trip): KSh ${transportWeekly.toLocaleString()}
🍔 Snacks & Food: KSh ${snacksWeekly.toLocaleString()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 TOTAL WEEKLY COST: KSh ${totalWeekly.toLocaleString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 MONEY-SAVING TIP:
If you cut just 10% (e.g., carpool 1 day/week or 
skip 1 snack purchase), you could save:

   💵 Weekly Savings: KSh ${Math.round(save10).toLocaleString()}
   ✅ New Weekly Total: KSh ${Math.round(totalWithSavings).toLocaleString()}
   📅 Semester Savings (15 weeks): KSh ${Math.round(save10 * 15).toLocaleString()}

Generated for: ${studentID}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;


    document.getElementById("summary").innerText = summary;
    
    alert("✅ Your weekly summary is ready! Check the page below.\n\nAll details have been logged to the console for debugging.");
    
    console.log("=== Estimator Complete ===");
}


function toggleTheme() {
    const current = document.body.style.backgroundColor;
    
    if (current === "white" || current === "" || current === "rgb(255, 255, 255)") {
        
        document.body.style.backgroundColor = "#1a1a1a";
        document.body.style.color = "#f0f0f0";
        console.log("Theme toggled to DARK mode");
    } else {
        
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        console.log("Theme toggled to LIGHT mode");
    }
    
    console.log("Current background color:", document.body.style.backgroundColor);
}


function resetEstimator() {
    const defaultText = `Click "Run Estimator" above to calculate your weekly campus costs.

We'll ask you about:
• Days you'll be on campus per week
• Your transport costs (matatu, Uber, etc.)
• Snack purchases per day
• Average snack prices

Then we'll show you your total weekly costs and a money-saving tip!`;
    
    
    document.getElementById("summary").innerText = defaultText;
    console.log("Summary reset to default state");
    alert("Summary has been reset. Click 'Run Estimator' to calculate again.");
}