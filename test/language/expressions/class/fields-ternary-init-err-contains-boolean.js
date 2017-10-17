// This file was procedurally generated from the following sources:
// - src/class-fields/init-err-contains-boolean.case
// - src/class-fields/initializer-error/cls-expr-fields-ternary.template
/*---
description: Syntax error if `arguments` used in class field (ternary expression)
esid: sec-class-definitions-static-semantics-early-errors
features: [class-fields]
flags: [generated]
negative:
  phase: early
  type: SyntaxError
info: |
    Static Semantics: Early Errors

      FieldDefinition:
        PropertyNameInitializeropt

      - It is a Syntax Error if ContainsArguments of Initializer is true.

    Static Semantics: ContainsArguments
      IdentifierReference : Identifier

      1. If the StringValue of Identifier is "arguments", return true.
      ...
      For all other grammatical productions, recurse on all nonterminals. If any piece returns true, then return true. Otherwise return false.

---*/


throw "Test262: This statement should not be evaluated.";

var C = class {
  x = true ? {} : arguments;
}
