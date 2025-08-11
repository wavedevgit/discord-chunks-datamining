/** Chunk was on web.js **/
/** chunk id: 346071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk886969 = require("./886969.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk429680 = require("./429680.js"),
  Chunk774945 = require("./774945.js");

function u(e) {
  let {
    fractionalPremiumInfo: t,
    variant: n = "default",
    enablePremiumBrandRefresh: u = false,
    style: d
  } = e, f = t.fractionalState === a.a$.FP_SUB_PAUSED, _ = (0, o.Z)(t.endsAt, f), p = "", h = {
    trial: {
      days_and_hours: s.t.SQyVVV,
      days: s.t["2ifAYG"],
      hours: s.t.kZSTYm
    },
    default: {
      days_and_hours: s.t["6r9LLi"],
      days: s.t.c2BbVF,
      hours: s.t["8Xm6uL"]
    }
  };
  return (_.days > 0 && _.hours > 0 ? p = s.intl.format(h[n].days_and_hours, {
    days: _.days,
    hours: _.hours
  }) : _.days > 0 ? p = s.intl.format(h[n].days, {
    days: _.days
  }) : _.hours > 0 && (p = s.intl.format(h[n].hours, {
    hours: _.hours
  })), "" === p) ? null : u ? <div className={l.premiumBrandRefreshContainer} style={d}>{<img src={c} alt={"Nitro Icon"} className={l.premiumBrandRefreshIcon} />}{<i.Text variant={"text-sm/medium"}>{p}</i.Text>}</div> : <div className={l.activeFractionalPremiumBannerContainer} style={d}>{<div className={l.nitroIconContainer}>{<i.SrA size={"md"} color={"white"} className={l.iconFractional} />}{<i.SrA size={"md"} color={"currentColor"} className={l.iconFractionalDark} />}</div>}{<i.Text variant={"text-sm/normal"}>{p}</i.Text>}{<div className={l.activeFractionalPremiumBannerBackgroundImage} />}</div>
}