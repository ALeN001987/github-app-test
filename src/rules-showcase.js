cat > src/rules-showcase.js <<'EOF'
// Intentionally bad code to exercise multiple ESLint rules.

// ❌ eqeqeq (use ===)
// ❌ curly (missing braces)
// ❌ no-console (console in prod)
// ❌ quotes (expect single)
// ❌ semi (missing semicolon)
// ❌ no-extra-semi (double ;)
// ❌ no-undef (fooNotDefined)
// ❌ no-unused-vars (unusedVar)

function compare(a, b) { if (a == b) console.log("loose compare") }

let greeting = "Hello"  // <- missing semicolon
;; // extra semicolon

const unusedVar = 42;

function demo() {
  console.log("should be single quotes");
  if (greeting == "Hello") console.log("no braces");  // curly + eqeqeq + no-console
  fooNotDefined = 123232323;  // no-undef
}

demo()
EOF
