unction calculateNetSalary(basicSalary, benefits) {
    // Constants based on the provided rates
    const payeRates = [
      { min: 0, max: 24000, rate: 10 },
      { min: 24001, max: 32333, rate: 25 },
      { min: 32334, max: 500000, rate: 30 },
      { min: 500001, max: 800000, rate: 32.5 },
      { min: 800001, max: Infinity, rate: 35 },
    ];
  
    const nhifRates = [
      { min: 0, max: 5999, deduction: 150 },
      { min: 6000, max: 7999, deduction: 300 },
      { min: 8000, max: 11999, deduction: 400 },
      { min: 12000, max: 14999, deduction: 500 },
      { min: 15000, max: 19999, deduction: 600 },
      { min: 20000, max: 24999, deduction: 750 },
      { min: 25000, max: 29999, deduction: 850 },
      { min: 30000, max: 34999, deduction: 900 },
      { min: 35000, max: 39999, deduction: 950 },
      { min: 40000, max: 44999, deduction: 1000 },
      { min: 45000, max: 49999, deduction: 1100 },
      { min: 50000, max: 59999, deduction: 1200 },
      { min: 60000, max: 69999, deduction: 1300 },
      { min: 70000, max: 79999, deduction: 1400 },
      { min: 80000, max: 89999, deduction: 1500 },
      { min: 90000, max: 99999, deduction: 1600 },
      { min: 100000, max: Infinity, deduction: 1700 },
    ];
  
    const nssfRates = {
      tier1: { min: 0, max: 7000, employeeRate: 6, employerRate: 6 },
      tier2: { min: 7001, max: 36000, employeeRate: 0, employerRate: 0 },
    };
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate PAYE
    let paye = 0;
    let taxableIncome = grossSalary; // Annualize the monthly gross salary
    for (let i = 0; i < payeRates.length; i++) {
      if (taxableIncome > payeRates[i].min && taxableIncome <= payeRates[i].max) {
        paye = (taxableIncome - payeRates[i].min) * (payeRates[i].rate / 100);
        break;
      }
    }
  
    // Calculate NHIF
    let nhif = 0;
    for (let i = 0; i < nhifRates.length; i++) {
      if (grossSalary >= nhifRates[i].min && grossSalary <= nhifRates[i].max) {
        nhif = nhifRates[i].deduction;
        break;
      }
    }
  
    // Calculate NSSF (Tier 1 only as per provided rates)
    let nssf = 0;
    if (grossSalary <= nssfRates.tier1.max) {
      nssf = grossSalary * (nssfRates.tier1.employeeRate / 100);
    } else {
      nssf = nssfRates.tier1.max * (nssfRates.tier1.employeeRate / 100);
    }
  
    // Calculate net salary
    const netSalary = grossSalary - paye - nhif - nssf;
  
    // Return all calculated values
    return {
      grossSalary: grossSalary.toFixed(2),
      paye: paye.toFixed(2),
      nhif: nhif.toFixed(2),
      nssf: nssf.toFixed(2),
      netSalary: netSalary.toFixed(2),
    };
  }
  
  // Example usage:
  const basicSalary = 100000; // Example basic salary
  const benefits = 20000; // Example benefits
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  console.log(salaryDetails);