import we, { useMemo as br, useCallback as R } from "react";
import { AttributeEditor as hr, Autosuggest as Er, Checkbox as yr, CodeEditor as mr, DatePicker as _r, DateRangePicker as gr, Input as Rr, Multiselect as xr, RadioGroup as Tr, Select as jr, TagEditor as Or, TextFilter as Sr, Textarea as Pr, Tiles as wr, TimeInput as kr, Toggle as Cr } from "@cloudscape-design/components";
import { useFormState as Dr, useFieldArray as Fr, get as Ar, Controller as w } from "react-hook-form";
var re = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function Ir() {
  if (Se) return U;
  Se = 1;
  var l = we, u = Symbol.for("react.element"), n = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, f = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(v, p, g) {
    var o, d = {}, x = null, _ = null;
    g !== void 0 && (x = "" + g), p.key !== void 0 && (x = "" + p.key), p.ref !== void 0 && (_ = p.ref);
    for (o in p) s.call(p, o) && !a.hasOwnProperty(o) && (d[o] = p[o]);
    if (v && v.defaultProps) for (o in p = v.defaultProps, p) d[o] === void 0 && (d[o] = p[o]);
    return { $$typeof: u, type: v, key: x, ref: _, props: d, _owner: f.current };
  }
  return U.Fragment = n, U.jsx = t, U.jsxs = t, U;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function $r() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var l = we, u = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), v = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), o = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), j = Symbol.iterator, D = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = j && e[j] || e[D];
      return typeof r == "function" ? r : null;
    }
    var $ = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          i[c - 1] = arguments[c];
        Ae("error", e, i);
      }
    }
    function Ae(e, r, i) {
      {
        var c = $.ReactDebugCurrentFrame, y = c.getStackAddendum();
        y !== "" && (r += "%s", i = i.concat([y]));
        var m = i.map(function(h) {
          return String(h);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var Ie = !1, $e = !1, We = !1, Ye = !1, Me = !1, te;
    te = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === a || Me || e === f || e === g || e === o || Ye || e === _ || Ie || $e || We || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === d || e.$$typeof === t || e.$$typeof === v || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ue(e, r, i) {
      var c = e.displayName;
      if (c)
        return c;
      var y = r.displayName || r.name || "";
      return y !== "" ? i + "(" + y + ")" : i;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case f:
          return "StrictMode";
        case g:
          return "Suspense";
        case o:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return ne(r) + ".Consumer";
          case t:
            var i = e;
            return ne(i._context) + ".Provider";
          case p:
            return Ue(e, e.render, "ForwardRef");
          case d:
            var c = e.displayName || null;
            return c !== null ? c : F(e.type) || "Memo";
          case x: {
            var y = e, m = y._payload, h = y._init;
            try {
              return F(h(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, M = 0, ae, ie, le, se, ue, oe, fe;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ve() {
      {
        if (M === 0) {
          ae = console.log, ie = console.info, le = console.warn, se = console.error, ue = console.group, oe = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function Ne() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: ae
            }),
            info: A({}, e, {
              value: ie
            }),
            warn: A({}, e, {
              value: le
            }),
            error: A({}, e, {
              value: se
            }),
            group: A({}, e, {
              value: ue
            }),
            groupCollapsed: A({}, e, {
              value: oe
            }),
            groupEnd: A({}, e, {
              value: fe
            })
          });
        }
        M < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = $.ReactCurrentDispatcher, z;
    function N(e, r, i) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (y) {
            var c = y.stack.trim().match(/\n( *(at )?)/);
            z = c && c[1] || "";
          }
        return `
` + z + e;
      }
    }
    var X = !1, J;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Je();
    }
    function de(e, r) {
      if (!e || X)
        return "";
      {
        var i = J.get(e);
        if (i !== void 0)
          return i;
      }
      var c;
      X = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = K.current, K.current = null, Ve();
      try {
        if (r) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (k) {
              c = k;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (k) {
              c = k;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            c = k;
          }
          e();
        }
      } catch (k) {
        if (k && c && typeof k.stack == "string") {
          for (var b = k.stack.split(`
`), P = c.stack.split(`
`), T = b.length - 1, O = P.length - 1; T >= 1 && O >= 0 && b[T] !== P[O]; )
            O--;
          for (; T >= 1 && O >= 0; T--, O--)
            if (b[T] !== P[O]) {
              if (T !== 1 || O !== 1)
                do
                  if (T--, O--, O < 0 || b[T] !== P[O]) {
                    var C = `
` + b[T].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, C), C;
                  }
                while (T >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        X = !1, K.current = m, Ne(), Error.prepareStackTrace = y;
      }
      var Y = e ? e.displayName || e.name : "", I = Y ? N(Y) : "";
      return typeof e == "function" && J.set(e, I), I;
    }
    function qe(e, r, i) {
      return de(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Ge(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case g:
          return N("Suspense");
        case o:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return qe(e.render);
          case d:
            return q(e.type, r, i);
          case x: {
            var c = e, y = c._payload, m = c._init;
            try {
              return q(m(y), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, ve = {}, pe = $.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, i = q(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(i);
      } else
        pe.setExtraStackFrame(null);
    }
    function Ke(e, r, i, c, y) {
      {
        var m = Function.call.bind(L);
        for (var h in e)
          if (m(e, h)) {
            var b = void 0;
            try {
              if (typeof e[h] != "function") {
                var P = Error((c || "React class") + ": " + i + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              b = e[h](r, h, c, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              b = T;
            }
            b && !(b instanceof Error) && (G(y), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", i, h, typeof b), G(null)), b instanceof Error && !(b.message in ve) && (ve[b.message] = !0, G(y), S("Failed %s type: %s", i, b.message), G(null));
          }
      }
    }
    var ze = Array.isArray;
    function H(e) {
      return ze(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function He(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function he(e) {
      if (He(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), be(e);
    }
    var Ee = $.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, me;
    function Qe(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Be(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && Ee.current;
    }
    function rr(e, r) {
      {
        var i = function() {
          ye || (ye = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var i = function() {
          me || (me = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, i, c, y, m, h) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: i,
        props: h,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function ar(e, r, i, c, y) {
      {
        var m, h = {}, b = null, P = null;
        i !== void 0 && (he(i), b = "" + i), Be(r) && (he(r.key), b = "" + r.key), Qe(r) && (P = r.ref, er(r, y));
        for (m in r)
          L.call(r, m) && !Ze.hasOwnProperty(m) && (h[m] = r[m]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (m in T)
            h[m] === void 0 && (h[m] = T[m]);
        }
        if (b || P) {
          var O = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && rr(h, O), P && tr(h, O);
        }
        return nr(e, b, P, y, c, Ee.current, h);
      }
    }
    var Z = $.ReactCurrentOwner, _e = $.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, i = q(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(i);
      } else
        _e.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function B(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function ge() {
      {
        if (Z.current) {
          var e = F(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      return "";
    }
    var Re = {};
    function lr(e) {
      {
        var r = ge();
        if (!r) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (r = `

Check the top-level render call using <` + i + ">.");
        }
        return r;
      }
    }
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = lr(r);
        if (Re[i])
          return;
        Re[i] = !0;
        var c = "";
        e && e._owner && e._owner !== Z.current && (c = " It was passed a child from " + F(e._owner.type) + "."), W(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, c), W(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var i = 0; i < e.length; i++) {
            var c = e[i];
            B(c) && xe(c, r);
          }
        else if (B(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = Fe(e);
          if (typeof y == "function" && y !== e.entries)
            for (var m = y.call(e), h; !(h = m.next()).done; )
              B(h.value) && xe(h.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var i;
        if (typeof r == "function")
          i = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === d))
          i = r.propTypes;
        else
          return;
        if (i) {
          var c = F(r);
          Ke(i, e.props, "prop", c, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var y = F(r);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
          var c = r[i];
          if (c !== "children" && c !== "key") {
            W(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var je = {};
    function Oe(e, r, i, c, y, m) {
      {
        var h = Le(e);
        if (!h) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = ir();
          P ? b += P : b += ge();
          var T;
          e === null ? T = "null" : H(e) ? T = "array" : e !== void 0 && e.$$typeof === u ? (T = "<" + (F(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, b);
        }
        var O = ar(e, r, i, y, m);
        if (O == null)
          return O;
        if (h) {
          var C = r.children;
          if (C !== void 0)
            if (c)
              if (H(C)) {
                for (var Y = 0; Y < C.length; Y++)
                  Te(C[Y], e);
                Object.freeze && Object.freeze(C);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(C, e);
        }
        if (L.call(r, "key")) {
          var I = F(e), k = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), ee = k.length > 0 ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[I + ee]) {
            var vr = k.length > 0 ? "{" + k.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, I, vr, I), je[I + ee] = !0;
          }
        }
        return e === s ? ur(O) : sr(O), O;
      }
    }
    function or(e, r, i) {
      return Oe(e, r, i, !0);
    }
    function fr(e, r, i) {
      return Oe(e, r, i, !1);
    }
    var cr = fr, dr = or;
    V.Fragment = s, V.jsx = cr, V.jsxs = dr;
  }()), V;
}
process.env.NODE_ENV === "production" ? re.exports = Ir() : re.exports = $r();
var E = re.exports;
const Vr = ({
  name: l,
  control: u,
  onRemoveButtonClick: n,
  onAddButtonClick: s,
  definition: f,
  defaultValue: a,
  handleState: t = !0,
  ...v
}) => {
  const { errors: p } = Dr({ control: u }), { fields: g, append: o, remove: d } = Fr({
    name: l,
    control: u
  }), x = br(
    () => f.map((_) => ({
      errorText: (j, D) => _.label && Ar(p, `${l}.${D}.${_.label.toString().toLowerCase()}.message`),
      ..._
    })),
    [f, p, l]
  );
  return /* @__PURE__ */ E.jsx(
    hr,
    {
      definition: x,
      items: g || [],
      onRemoveButtonClick: (_) => {
        t && d(_.detail.itemIndex), n == null || n(_, d);
      },
      onAddButtonClick: (_) => {
        t && o(a), s == null || s(_, o);
      },
      ...v
    }
  );
}, Nr = ({
  name: l,
  control: u,
  defaultValue: n,
  rules: s,
  shouldUnregister: f = !1,
  onBlur: a,
  onChange: t,
  ...v
}) => {
  const p = R(
    (o) => {
      a == null || a(o);
    },
    [a]
  ), g = R(
    (o) => {
      t == null || t(o);
    },
    [t]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      defaultValue: n,
      rules: s,
      shouldUnregister: f,
      render: ({ field: { ref: o, onBlur: d, onChange: x, value: _ } }) => /* @__PURE__ */ E.jsx(
        Er,
        {
          ref: o,
          name: l,
          value: _ || "",
          onBlur: (j) => {
            d(), p(j);
          },
          onChange: (j) => {
            x(j.detail.value), g(j);
          },
          ...v
        }
      )
    }
  );
}, Jr = ({
  name: l,
  control: u,
  onChange: n,
  ...s
}) => {
  const f = R(
    (a, t) => {
      a(t.detail.checked), n == null || n(t);
    },
    [n]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      render: ({ field: { ref: a, onChange: t, value: v = !1 } }) => /* @__PURE__ */ E.jsx(yr, { ref: a, onChange: f.bind(null, t), checked: v, ...s })
    }
  );
}, qr = ({
  name: l,
  control: u,
  onChange: n,
  ...s
}) => {
  const f = R(
    (a, t) => {
      a(t.detail.value), n == null || n(t);
    },
    [n]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      render: ({ field: { onChange: a, value: t } }) => /* @__PURE__ */ E.jsx(mr, { value: t || "", onChange: f.bind(null, a), ...s })
    }
  );
}, Gr = ({
  name: l,
  control: u,
  defaultValue: n,
  rules: s,
  shouldUnregister: f = !1,
  onBlur: a,
  onChange: t,
  ...v
}) => {
  const p = R(
    (o) => {
      a == null || a(o);
    },
    [a]
  ), g = R(
    (o) => {
      t == null || t(o);
    },
    [t]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      defaultValue: n,
      rules: s,
      shouldUnregister: f,
      render: ({ field: { ref: o, onChange: d, onBlur: x, value: _ } }) => /* @__PURE__ */ E.jsx(
        _r,
        {
          ref: o,
          name: l,
          value: _,
          onBlur: (j) => {
            x(), p(j);
          },
          onChange: (j) => {
            d(j.detail.value), g(j);
          },
          ...v
        }
      )
    }
  );
}, Kr = ({
  name: l,
  control: u,
  onBlur: n,
  onChange: s,
  ...f
}) => {
  const a = R(
    (v) => {
      n == null || n(v);
    },
    [n]
  ), t = R(
    (v) => {
      s == null || s(v);
    },
    [s]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      render: ({ field: { ref: v, onBlur: p, onChange: g, value: o } }) => /* @__PURE__ */ E.jsx(
        gr,
        {
          ref: v,
          value: o,
          onBlur: (d) => {
            p(), a(d);
          },
          onChange: (d) => {
            g(d.detail.value), t(d);
          },
          ...f
        }
      )
    }
  );
}, zr = ({
  name: l,
  control: u,
  defaultValue: n,
  rules: s,
  shouldUnregister: f = !1,
  onBlur: a,
  onChange: t,
  ...v
}) => {
  const p = R(
    (o) => {
      a == null || a(o);
    },
    [a]
  ), g = R(
    (o) => {
      t == null || t(o);
    },
    [t]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      defaultValue: n,
      rules: s,
      shouldUnregister: f,
      render: ({ field: { ref: o, onBlur: d, onChange: x, value: _ } }) => /* @__PURE__ */ E.jsx(
        Rr,
        {
          ref: o,
          name: l,
          value: _,
          onBlur: (j) => {
            d(), p(j);
          },
          onChange: (j) => {
            x(j.detail.value), g(j);
          },
          ...v
        }
      )
    }
  );
}, ke = (l = []) => l != null && l.length ? l.map((u) => "options" in u ? ke(u.options) : u.value).flat() : [], Ce = (l = [], u = []) => l != null && l.length && (u != null && u.length) ? l.reduce((n, s) => {
  if (l != null && l.length) {
    if ("options" in s) {
      const f = Ce(s.options, u);
      f != null && f.length && n.push(...f);
    }
    "value" in s && u.find((f) => f === s.value) && n.push(s);
  }
  return n;
}, []).flat() : [], Wr = {
  transformMultiselectOptionsToArray: ke,
  mapSelectedOptionsWithOptions: Ce
}, Xr = ({
  name: l,
  control: u,
  options: n,
  defaultValue: s,
  rules: f,
  onBlur: a,
  onChange: t,
  shouldUnregister: v = !1,
  ...p
}) => {
  const g = R(
    (d) => {
      a == null || a(d);
    },
    [a]
  ), o = R(
    (d) => {
      t == null || t(d);
    },
    [t]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      defaultValue: s,
      rules: f,
      shouldUnregister: v,
      render: ({ field: { ref: d, onBlur: x, onChange: _, value: j } }) => /* @__PURE__ */ E.jsx(
        xr,
        {
          ref: d,
          options: n,
          onBlur: (D) => {
            x(), g(D);
          },
          onChange: (D) => {
            _(Wr.transformMultiselectOptionsToArray(D.detail.selectedOptions)), o(D);
          },
          selectedOptions: j,
          ...p
        }
      )
    }
  );
}, Hr = ({
  name: l,
  control: u,
  onChange: n,
  ...s
}) => {
  const f = R(
    (a, t) => {
      a(t.detail.value), n == null || n(t);
    },
    [n]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      render: ({ field: { onChange: a, value: t } }) => /* @__PURE__ */ E.jsx(Tr, { onChange: f.bind(null, a), value: t, items: s.items, ...s })
    }
  );
}, De = (l = [], u) => {
  let n = null;
  return l && u && (n = l.reduce(
    (s, f) => {
      if ("options" in f) {
        const a = De(f.options, u);
        a && s.push(a);
      }
      return "value" in f && f.value === u && s.push(f), s;
    },
    []
  )[0]), n || null;
}, Yr = {
  mapSelectedOptionWithOptions: De
}, Zr = ({
  name: l,
  control: u,
  defaultValue: n,
  rules: s,
  shouldUnregister: f = !1,
  onBlur: a,
  onChange: t,
  ...v
}) => {
  const p = R(
    (o, d) => {
      o(), a == null || a(d);
    },
    [a]
  ), g = R(
    (o, d) => {
      o(d.detail.selectedOption.value), t == null || t(d);
    },
    [t]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      defaultValue: n,
      rules: s,
      shouldUnregister: f,
      render: ({ field: { ref: o, onChange: d, onBlur: x, value: _ } }) => /* @__PURE__ */ E.jsx(
        jr,
        {
          ref: o,
          selectedOption: Yr.mapSelectedOptionWithOptions(v.options, _),
          onBlur: p.bind(null, x),
          onChange: g.bind(null, d),
          ...v
        }
      )
    }
  );
}, Qr = ({
  name: l,
  control: u,
  onChange: n,
  ...s
}) => {
  const f = R(
    (a, t) => {
      a([...t.detail.tags]), n == null || n(t);
    },
    [n]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      render: ({ field: { ref: a, onChange: t, value: v } }) => /* @__PURE__ */ E.jsx(
        Or,
        {
          ref: a,
          tags: v || [],
          onChange: f.bind(null, t),
          ...s
        }
      )
    }
  );
}, Br = ({
  name: l,
  control: u,
  onChange: n,
  ...s
}) => {
  const f = R(
    (a, t) => {
      a(t.detail.filteringText), n == null || n(t);
    },
    [n]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      render: ({ field: { ref: a, onChange: t, value: v } }) => /* @__PURE__ */ E.jsx(
        Sr,
        {
          ref: a,
          filteringText: v,
          onChange: f.bind(null, t),
          ...s
        }
      )
    }
  );
}, et = ({
  name: l,
  control: u,
  defaultValue: n,
  rules: s,
  shouldUnregister: f = !1,
  onBlur: a,
  onChange: t,
  ...v
}) => {
  const p = R(
    (o, d) => {
      o(), a == null || a(d);
    },
    [a]
  ), g = R(
    (o, d) => {
      o(d.detail.value), t == null || t(d);
    },
    [t]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      defaultValue: n,
      rules: s,
      shouldUnregister: f,
      render: ({ field: { onChange: o, onBlur: d, value: x, ref: _ } }) => /* @__PURE__ */ E.jsx(
        Pr,
        {
          ref: _,
          name: l,
          value: x,
          onBlur: p.bind(null, d),
          onChange: g.bind(null, o),
          ...v
        }
      )
    }
  );
}, rt = ({ name: l, control: u, onChange: n, ...s }) => {
  const f = R(
    (a, t) => {
      a(t.detail.value), n == null || n(t);
    },
    [n]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      render: ({ field: { onChange: a, value: t } }) => /* @__PURE__ */ E.jsx(wr, { onChange: f.bind(null, a), value: t, items: s.items, ...s })
    }
  );
}, tt = ({
  name: l,
  control: u,
  onBlur: n,
  onChange: s,
  ...f
}) => {
  const a = R(
    (v, p) => {
      v(), n == null || n(p);
    },
    [n]
  ), t = R(
    (v, p) => {
      v(p.detail.value), s == null || s(p);
    },
    [s]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      render: ({ field: { ref: v, onChange: p, onBlur: g, value: o } }) => /* @__PURE__ */ E.jsx(
        kr,
        {
          name: l,
          ref: v,
          value: o,
          onBlur: a.bind(null, g),
          onChange: t.bind(null, p),
          ...f
        }
      )
    }
  );
}, nt = ({
  name: l,
  control: u,
  onChange: n,
  ...s
}) => {
  const f = R(
    (a, t) => {
      a(t.detail.checked), n == null || n(t);
    },
    [n]
  );
  return /* @__PURE__ */ E.jsx(
    w,
    {
      name: l,
      control: u,
      render: ({ field: { ref: a, onChange: t, value: v = !1 } }) => /* @__PURE__ */ E.jsx(Cr, { ref: a, name: l, checked: v, onChange: f.bind(null, t), ...s })
    }
  );
};
export {
  Vr as CAttributeEditor,
  Nr as CAutosuggest,
  Jr as CCheckbox,
  qr as CCodeEditor,
  Gr as CDatePicker,
  Kr as CDateRangePicker,
  zr as CInput,
  Xr as CMultiselect,
  Hr as CRadioGroup,
  Zr as CSelect,
  Qr as CTagEditor,
  Br as CTextFilter,
  et as CTextarea,
  rt as CTiles,
  tt as CTimeInput,
  nt as CToggle,
  Wr as MultiSelectUtils,
  Yr as SelectUtils
};
//# sourceMappingURL=react-hook-form-cloudscape.es.js.map
