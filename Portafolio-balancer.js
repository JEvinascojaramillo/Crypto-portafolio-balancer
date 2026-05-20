/**
 * Project: Crypto Portfolio Allocation & Balancer
 * Author: Juan Esteban Vinasco Jaramillo
 * Goal: Analyze crypto holdings and calculate current portfolio distribution.
 */

// 1. DATA STRUCTURE: Array of Objects containing current holdings
const myPortfolio = [
    { token: "BTC", amount: 0.05, currentPrice: 65000 },
    { token: "ETH", amount: 0.75, currentPrice: 3400 },
    { token: "SOL", amount: 12.0, currentPrice: 150 },
    { token: "USDT", amount: 500, currentPrice: 1.0 }
];

function analyzePortfolio(portfolioArray) {
    let totalPortfolioValue = 0;

    console.log("--- 💰 PORTFOLIO HOLDINGS ANALYSIS ---");

    // First pass: Calculate individual values and total balance
    portfolioArray.forEach(asset => {
        let assetValue = asset.amount * asset.currentPrice;
        totalPortfolioValue += assetValue;
        // Temporary property to avoid recalculating later
        asset.totalValue = assetValue; 
    });

    // Second pass: Calculate percentages and print report
    portfolioArray.forEach(asset => {
        let allocationPercentage = (asset.totalValue / totalPortfolioValue) * 100;
        console.log(
            `Token: ${asset.token} | ` +
            `Value: $${asset.totalValue.toFixed(2)} | ` +
            `Allocation: ${allocationPercentage.toFixed(2)}%`
        );
    });

    console.log("--------------------------------------");
    console.log(`Total Portfolio Net Worth: $${totalPortfolioValue.toFixed(2)}`);
    
    return totalPortfolioValue;
}

// Execute the analysis
analyzePortfolio(myPortfolio);
