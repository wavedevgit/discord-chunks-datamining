/** Chunk was on web.js **/
/** chunk id: 342393, original params: e,t,n (module,exports,re quire) **/
! function(e, r) {
  r(t, n(64700))
}(0, function(e, t) {
  "use strict";

  function n(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })), n.push.apply(n, r)
    }
    return n
  }

  function r(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? n(Object(r), true).forEach(function(t) {
        a(e, t, r[t])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      })
    }
    return e
  }

  function i(e) {
    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e
  }

  function o(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }

  function s(e, t) {
    if (null == e) return {};
    var n, r, i = o(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }

  function l(e, t) {
    return c(e) || u(e, t) || d(e, t) || p()
  }

  function c(e) {
    if (Array.isArray(e)) return e
  }

  function u(e, t) {
    var n, r, i = e && ("u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
    if (null != i) {
      var a = [],
        o = true,
        s = false;
      try {
        for (i = i.call(e); !(o = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); o = true);
      } catch (e) {
        s = true, r = e
      } finally {
        try {
          o || null == i.return || i.return()
        } finally {
          if (s) throw r
        }
      }
      return a
    }
  }

  function d(e, t) {
    if (e) {
      if ("string" == typeof e) return f(e, t);
      var n = Object.prototype.toString.call(e).slice(8, false);
      if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
    }
  }

  function f(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
  }

  function p() {
    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }

  function _(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
  }
  var h, m, g, E, y = {
    exports: {}
  };

  function b() {
    return m ? h : (m = 1, h = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")
  }
  y.exports = (function() {
    if (E) return g;
    E = 1;
    var e = b();

    function t() {}

    function n() {}
    return n.resetWarningCache = t, g = function() {
      function r(t, n, r, i, a, o) {
        if (o !== e) {
          var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw s.name = "Invariant Violation", s
        }
      }

      function i() {
        return r
      }
      r.isRequired = r;
      var a = {
        array: r,
        bool: r,
        func: r,
        number: r,
        object: r,
        string: r,
        symbol: r,
        any: r,
        arrayOf: i,
        element: r,
        elementType: r,
        instanceOf: i,
        node: r,
        objectOf: i,
        oneOf: i,
        oneOfType: i,
        shape: i,
        exact: i,
        checkPropTypes: n,
        resetWarningCache: t
      };
      return a.PropTypes = a, a
    }
  })()();
  var O = _(y.exports),
    v = function(e, n, r) {
      var i = !!r,
        a = t.useRef(r);
      t.useEffect(function() {
        a.current = r
      }, [r]), t.useEffect(function() {
        if (!i || !e) return function() {};
        var t = function() {
          a.current && a.current.apply(a, arguments)
        };
        return e.on(n, t),
          function() {
            e.off(n, t)
          }
      }, [i, n, e, a])
    },
    A = function(e) {
      var n = t.useRef(e);
      return t.useEffect(function() {
        n.current = e
      }, [e]), n.current
    },
    I = function(e) {
      return null !== e && "object" === i(e)
    },
    S = function(e) {
      return I(e) && "function" == typeof e.then
    },
    T = function(e) {
      return I(e) && "function" == typeof e.elements && "function" == typeof e.createToken && "function" == typeof e.createPaymentMethod && "function" == typeof e.confirmCardPayment
    },
    C = "[object Object]",
    N = function e(t, n) {
      if (!I(t) || !I(n)) return t === n;
      var r = Array.isArray(t);
      if (r !== Array.isArray(n)) returnfalse;
      var i = Object.prototype.toString.call(t) === C;
      if (i !== (Object.prototype.toString.call(n) === C)) returnfalse;
      if (!i && !r) return t === n;
      var a = Object.keys(t),
        o = Object.keys(n);
      if (a.length !== o.length) returnfalse;
      for (var s = {}, l = 0; l < a.length; l += 1) s[a[l]] = true;
      for (var c = 0; c < o.length; c += 1) s[o[c]] = true;
      var u = Object.keys(s);
      if (u.length !== a.length) returnfalse;
      var d = t,
        f = n,
        p = function(t) {
          return e(d[t], f[t])
        };
      return u.every(p)
    },
    w = function(e, t, n) {
      return I(e) ? Object.keys(e).reduce(function(i, o) {
        var s = !I(t) || !N(e[o], t[o]);
        return n.includes(o) ? (s && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), i) : s ? r(r({}, i || {}), {}, a({}, o, e[o])) : i
      }, null) : null
    },
    R = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
    P = function(e) {
      var t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : R;
      if (null === e || T(e)) return e;
      throw Error(t)
    },
    D = function(e) {
      var t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : R;
      if (S(e)) return {
        tag: "async",
        stripePromise: Promise.resolve(e).then(function(e) {
          return P(e, t)
        })
      };
      var n = P(e, t);
      return null === n ? {
        tag: "empty"
      } : {
        tag: "sync",
        stripe: n
      }
    },
    L = function(e) {
      e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
        name: "react-stripe-js",
        version: "3.7.0"
      }), e.registerAppInfo({
        name: "react-stripe-js",
        version: "3.7.0",
        url: "https://stripe.com/docs/stripe-js/react"
      }))
    },
    x = t.createContext(null);
  x.displayName = "ElementsContext";
  var M = function(e, t) {
      if (!e) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
      return e
    },
    j = function(e) {
      var n = e.stripe,
        r = e.options,
        i = e.children,
        a = t.useMemo(function() {
          return D(n)
        }, [n]),
        o = l(t.useState(function() {
          return {
            stripe: "sync" === a.tag ? a.stripe : null,
            elements: "sync" === a.tag ? a.stripe.elements(r) : null
          }
        }), 2),
        s = o[0],
        c = o[1];
      t.useEffect(function() {
        var e = true,
          t = function(e) {
            c(function(t) {
              return t.stripe ? t : {
                stripe: e,
                elements: e.elements(r)
              }
            })
          };
        return "async" !== a.tag || s.stripe ? "sync" !== a.tag || s.stripe || t(a.stripe) : a.stripePromise.then(function(n) {
            n && e && t(n)
          }),
          function() {
            e = false
          }
      }, [a, s, r]);
      var u = A(n);
      t.useEffect(function() {
        null !== u && u !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
      }, [u, n]);
      var d = A(r);
      return t.useEffect(function() {
        if (s.elements) {
          var e = w(r, d, ["clientSecret", "fonts"]);
          e && s.elements.update(e)
        }
      }, [r, d, s.elements]), t.useEffect(function() {
        L(s.stripe)
      }, [s.stripe]), t.createElement(x.Provider, {
        value: s
      }, i)
    };
  j.propTypes = {
    stripe: O.any,
    options: O.object
  };
  var k = function(e) {
      return M(t.useContext(x), e)
    },
    U = function() {
      return k("calls useElements()").elements
    },
    G = function(e) {
      return (0, e.children)(k("mounts <ElementsConsumer>"))
    };
  G.propTypes = {
    children: O.func.isRequired
  };
  var F = ["on", "session"],
    V = t.createContext(null);
  V.displayName = "CheckoutSdkContext";
  var B = function(e, t) {
      if (!e) throw Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(t, " in an <CheckoutProvider> provider."));
      return e
    },
    H = t.createContext(null);
  H.displayName = "CheckoutContext";
  var Y = function(e, t) {
      if (!e) return null;
      e.on, e.session;
      var n = s(e, F);
      return t ? Object.assign(t, n) : Object.assign(e.session(), n)
    },
    W = "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
    K = function(e) {
      var n = e.stripe,
        r = e.options,
        i = e.children,
        a = t.useMemo(function() {
          return D(n, W)
        }, [n]),
        o = l(t.useState(null), 2),
        s = o[0],
        c = o[1],
        u = l(t.useState(function() {
          return {
            stripe: "sync" === a.tag ? a.stripe : null,
            checkoutSdk: null
          }
        }), 2),
        d = u[0],
        f = u[1],
        p = function(e, t) {
          f(function(n) {
            return n.stripe && n.checkoutSdk ? n : {
              stripe: e,
              checkoutSdk: t
            }
          })
        },
        _ = t.useRef(false);
      t.useEffect(function() {
        var e = true;
        return "async" !== a.tag || d.stripe ? "sync" === a.tag && a.stripe && !_.current && (_.current = true, a.stripe.initCheckout(r).then(function(e) {
            e && (p(a.stripe, e), e.on("change", c))
          })) : a.stripePromise.then(function(t) {
            t && e && !_.current && (_.current = true, t.initCheckout(r).then(function(e) {
              e && (p(t, e), e.on("change", c))
            }))
          }),
          function() {
            e = false
          }
      }, [a, d, r, c]);
      var h = A(n);
      t.useEffect(function() {
        null !== h && h !== n && console.warn("Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.")
      }, [h, n]);
      var m = A(r),
        g = A(d.checkoutSdk);
      t.useEffect(function() {
        if (d.checkoutSdk) {
          var e, t, n = null == m || null == (e = m.elementsOptions) ? true : e.appearance,
            i = null == r || null == (t = r.elementsOptions) ? true : t.appearance,
            a = !N(i, n),
            o = !g && d.checkoutSdk;
          i && (a || o) && d.checkoutSdk.changeAppearance(i)
        }
      }, [r, m, d.checkoutSdk, g]), t.useEffect(function() {
        L(d.stripe)
      }, [d.stripe]);
      var E = t.useMemo(function() {
        return Y(d.checkoutSdk, s)
      }, [d.checkoutSdk, s]);
      return d.checkoutSdk ? t.createElement(V.Provider, {
        value: d
      }, t.createElement(H.Provider, {
        value: E
      }, i)) : null
    };
  K.propTypes = {
    stripe: O.any,
    options: O.shape({
      fetchClientSecret: O.func.isRequired,
      elementsOptions: O.object
    }).isRequired
  };
  var z = function(e) {
      return B(t.useContext(V), e)
    },
    q = function(e) {
      var n = t.useContext(V),
        r = t.useContext(x);
      if (n && r) throw Error("You cannot wrap the part of your app that ".concat(e, " in both <CheckoutProvider> and <Elements> providers."));
      return n ? B(n, e) : M(r, e)
    },
    Z = function() {
      z("calls useCheckout()");
      var e = t.useContext(H);
      if (!e) throw Error("Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.");
      return e
    },
    Q = ["mode"],
    X = function(e) {
      return e.charAt(0).toUpperCase() + e.slice(1)
    },
    J = function(e, n) {
      var r = "".concat(X(e), "Element"),
        i = function(n) {
          var i, a = n.id,
            o = n.className,
            c = n.options,
            u = true === c ? {} : c,
            d = n.onBlur,
            f = n.onFocus,
            p = n.onReady,
            _ = n.onChange,
            h = n.onEscape,
            m = n.onClick,
            g = n.onLoadError,
            E = n.onLoaderStart,
            y = n.onNetworksChange,
            b = n.onConfirm,
            O = n.onCancel,
            I = n.onShippingAddressChange,
            S = n.onShippingRateChange,
            T = q("mounts <".concat(r, ">")),
            C = "elements" in T ? T.elements : null,
            N = "checkoutSdk" in T ? T.checkoutSdk : null,
            R = l(t.useState(null), 2),
            P = R[0],
            D = R[1],
            L = t.useRef(null),
            x = t.useRef(null);
          v(P, "blur", d), v(P, "focus", f), v(P, "escape", h), v(P, "click", m), v(P, "loaderror", g), v(P, "loaderstart", E), v(P, "networkschange", y), v(P, "confirm", b), v(P, "cancel", O), v(P, "shippingaddresschange", I), v(P, "shippingratechange", S), v(P, "change", _), p && (i = "expressCheckout" === e ? p : function() {
            p(P)
          }), v(P, "ready", i), t.useLayoutEffect(function() {
            if (null === L.current && null !== x.current && (C || N)) {
              var t = null;
              if (N) switch (e) {
                case "payment":
                  t = N.createPaymentElement(u);
                  break;
                case "address":
                  if ("mode" in u) {
                    var n = u.mode,
                      i = s(u, Q);
                    if ("shipping" === n) t = N.createShippingAddressElement(i);
                    else if ("billing" === n) t = N.createBillingAddressElement(i);
                    else throw Error("Invalid options.mode. mode must be 'billing' or 'shipping'.")
                  } else throw Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");
                  break;
                case "expressCheckout":
                  t = N.createExpressCheckoutElement(u);
                  break;
                case "currencySelector":
                  t = N.createCurrencySelectorElement();
                  break;
                default:
                  throw Error("Invalid Element type ".concat(r, ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."))
              } else C && (t = C.create(e, u));
              L.current = t, D(t), t && t.mount(x.current)
            }
          }, [C, N, u]);
          var M = A(u);
          return t.useEffect(function() {
            if (L.current) {
              var e = w(u, M, ["paymentRequest"]);
              e && "update" in L.current && L.current.update(e)
            }
          }, [u, M]), t.useLayoutEffect(function() {
            return function() {
              if (L.current && "function" == typeof L.current.destroy) try {
                L.current.destroy(), L.current = null
              } catch (e) {}
            }
          }, []), t.createElement("div", {
            id: a,
            className: o,
            ref: x
          })
        },
        a = function(e) {
          q("mounts <".concat(r, ">"));
          var n = e.id,
            i = e.className;
          return t.createElement("div", {
            id: n,
            className: i
          })
        },
        o = n ? a : i;
      return o.propTypes = {
        id: O.string,
        className: O.string,
        onChange: O.func,
        onBlur: O.func,
        onFocus: O.func,
        onReady: O.func,
        onEscape: O.func,
        onClick: O.func,
        onLoadError: O.func,
        onLoaderStart: O.func,
        onNetworksChange: O.func,
        onConfirm: O.func,
        onCancel: O.func,
        onShippingAddressChange: O.func,
        onShippingRateChange: O.func,
        options: O.object
      }, o.displayName = r, o.__elementType = e, o
    },
    $ = "u" < typeof window,
    ee = t.createContext(null);
  ee.displayName = "EmbeddedCheckoutProviderContext";
  var et = function() {
      var e = t.useContext(ee);
      if (!e) throw Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
      return e
    },
    en = "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
    er = function(e) {
      var n = e.stripe,
        r = e.options,
        i = e.children,
        a = t.useMemo(function() {
          return D(n, en)
        }, [n]),
        o = t.useRef(null),
        s = t.useRef(null),
        c = l(t.useState({
          embeddedCheckout: null
        }), 2),
        u = c[0],
        d = c[1];
      t.useEffect(function() {
        if (!s.current && !o.current) {
          var e = function(e) {
            s.current || o.current || (s.current = e, o.current = s.current.initEmbeddedCheckout(r).then(function(e) {
              d({
                embeddedCheckout: e
              })
            }))
          };
          "async" === a.tag && !s.current && (r.clientSecret || r.fetchClientSecret) ? a.stripePromise.then(function(t) {
            t && e(t)
          }) : "sync" === a.tag && !s.current && (r.clientSecret || r.fetchClientSecret) && e(a.stripe)
        }
      }, [a, r, u, s]), t.useEffect(function() {
        return function() {
          u.embeddedCheckout ? (o.current = null, u.embeddedCheckout.destroy()) : o.current && o.current.then(function() {
            o.current = null, u.embeddedCheckout && u.embeddedCheckout.destroy()
          })
        }
      }, [u.embeddedCheckout]), t.useEffect(function() {
        L(s)
      }, [s]);
      var f = A(n);
      t.useEffect(function() {
        null !== f && f !== n && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.")
      }, [f, n]);
      var p = A(r);
      return t.useEffect(function() {
        if (null != p) {
          if (null == r) return void console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.");
          true === r.clientSecret && true === r.fetchClientSecret && console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`."), null != p.clientSecret && r.clientSecret !== p.clientSecret && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."), null != p.fetchClientSecret && r.fetchClientSecret !== p.fetchClientSecret && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."), null != p.onComplete && r.onComplete !== p.onComplete && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it."), null != p.onShippingDetailsChange && r.onShippingDetailsChange !== p.onShippingDetailsChange && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it."), null != p.onLineItemsChange && r.onLineItemsChange !== p.onLineItemsChange && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.")
        }
      }, [p, r]), t.createElement(ee.Provider, {
        value: u
      }, i)
    },
    ei = function(e) {
      var n = e.id,
        r = e.className,
        i = et().embeddedCheckout,
        a = t.useRef(false),
        o = t.useRef(null);
      return t.useLayoutEffect(function() {
        return !a.current && i && null !== o.current && (i.mount(o.current), a.current = true),
          function() {
            if (a.current && i) try {
              i.unmount(), a.current = false
            } catch (e) {}
          }
      }, [i]), t.createElement("div", {
        ref: o,
        id: n,
        className: r
      })
    },
    ea = function(e) {
      var n = e.id,
        r = e.className;
      return et(), t.createElement("div", {
        id: n,
        className: r
      })
    },
    eo = $ ? ea : ei,
    es = function() {
      return q("calls useStripe()").stripe
    },
    el = J("auBankAccount", $),
    ec = J("card", $),
    eu = J("cardNumber", $),
    ed = J("cardExpiry", $),
    ef = J("cardCvc", $),
    ep = J("fpxBank", $),
    e_ = J("iban", $),
    eh = J("idealBank", $),
    em = J("p24Bank", $),
    eg = J("epsBank", $),
    eE = J("payment", $),
    ey = J("expressCheckout", $),
    eb = J("currencySelector", $),
    eO = J("paymentRequestButton", $),
    ev = J("linkAuthentication", $),
    eA = J("address", $),
    eI = J("shippingAddress", $),
    eS = J("paymentMethodMessaging", $),
    eT = J("affirmMessage", $),
    eC = J("afterpayClearpayMessage", $);
  e.AddressElement = eA, e.AffirmMessageElement = eT, e.AfterpayClearpayMessageElement = eC, e.AuBankAccountElement = el, e.CardCvcElement = ef, e.CardElement = ec, e.CardExpiryElement = ed, e.CardNumberElement = eu, e.CheckoutProvider = K, e.CurrencySelectorElement = eb, e.Elements = j, e.ElementsConsumer = G, e.EmbeddedCheckout = eo, e.EmbeddedCheckoutProvider = er, e.EpsBankElement = eg, e.ExpressCheckoutElement = ey, e.FpxBankElement = ep, e.IbanElement = e_, e.IdealBankElement = eh, e.LinkAuthenticationElement = ev, e.P24BankElement = em, e.PaymentElement = eE, e.PaymentMethodMessagingElement = eS, e.PaymentRequestButtonElement = eO, e.ShippingAddressElement = eI, e.useCheckout = Z, e.useElements = U, e.useStripe = es
})