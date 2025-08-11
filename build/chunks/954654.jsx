/** Chunk was on web.js **/
/** chunk id: 954654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => L,
  xX: () => w
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk23750 = require("./23750.js"),
  Chunk970184 = require("./970184.js"),
  Chunk197653 = require("./197653.jsx"),
  Chunk987106 = require("./987106.js"),
  Chunk927057 = require("./927057.jsx"),
  Chunk574597 = require("./574597.jsx"),
  Chunk378975 = require("./378975.jsx"),
  Chunk732586 = require("./732586.jsx"),
  Chunk988075 = require("./988075.js"),
  Chunk12067 = require("./12067.jsx"),
  Chunk676149 = require("./676149.jsx"),
  Chunk861529 = require("./861529.jsx"),
  Chunk568248 = require("./568248.jsx"),
  Chunk770009 = require("./770009.jsx"),
  Chunk889515 = require("./889515.jsx"),
  Chunk985184 = require("./985184.js"),
  Chunk424158 = require("./424158.jsx"),
  Chunk892519 = require("./892519.jsx"),
  Chunk841806 = require("./841806.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e) {
  return e.map((e, t) => <r.Fragment>{D(e, t.toString())}{<a.nn4>{","}</a.nn4>}</r.Fragment>)
}

function D(e, t) {
  switch (e.type) {
    case s.re.ACTION_ROW:
      return <v.Z{...P(C({}, e), {
        renderComponents: w
      })} />;
    case s.re.BUTTON:
      return <d.Z{...C({}, e)} />;
    case s.re.STRING_SELECT:
      return <p.Z{...C({}, e)} />;
    case s.re.CHANNEL_SELECT:
      return <f.Z{...C({}, e)} />;
    case s.re.USER_SELECT:
    case s.re.ROLE_SELECT:
    case s.re.MENTIONABLE_SELECT:
      return <_.Z{...C({}, e)} />;
    case s.re.TEXT_INPUT:
      return <h.Z{...C({}, e)} />;
    case s.re.SECTION:
      return <S.Z{...P(C({}, e), {
        renderComponents: w
      })} />;
    case s.re.TEXT_DISPLAY:
      return <b.Z{...C({}, e)} />;
    case s.re.MEDIA_GALLERY:
      return <g.Z{...C({}, e)} />;
    case s.re.THUMBNAIL:
      return <y.Z{...C({}, e)} />;
    case s.re.FILE:
      return <m.Z{...C({}, e)} />;
    case s.re.SEPARATOR:
      return <E.Z{...C({}, e)} />;
    case s.re.CONTENT_INVENTORY_ENTRY:
      return <O.Z{...C({}, e)} />;
    case s.re.CONTAINER:
      return <I.ZP{...P(C({}, e), {
        renderComponents: w
      })} />;
    case s.re.LABEL:
      return <T.Z{...P(C({}, e), {
        renderComponent: D
      })} />
  }
}

function L(e) {
  let {
    message: t,
    shouldDisableInteractiveComponents: n
  } = e, {
    components: i
  } = t, [a, s] = (0, u.e4)();
  return 0 === i.length ? null : <c.Il message={t} shouldDisableInteractiveComponents={n}><u.am.Root containerInnerWidth={s}><div style={{
          width: "100%"
        }} ref={a}><u.am.AutoMeasuredNestedContainer>{e => (0, r.jsx)("div", {
            ref: e,
            className: o()([A.container, {
              [A.isComponentsV2]: (0, l.hv)(t)
            }]),
            children: w(i)
          })}</u.am.AutoMeasuredNestedContainer></div></u.am.Root></c.Il>
}