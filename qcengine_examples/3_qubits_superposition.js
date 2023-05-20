/*
    Run the code on https://oreilly-qc.github.io/
*/

// Create a quantum circuit with 3 qubits in superposition (Programming Quantum Computers - Fig. 3.3)
// Expected result: 1/2 probability of measuring 0, 1/2 probability of measuring 1
qc.reset(3);
qc.write(0);

qc.had(1);

qc.cnot(2,1);
qc.cnot(4,1);