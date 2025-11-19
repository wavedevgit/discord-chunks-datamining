/** Chunk was on 84864 **/
/** chunk id: 238675, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  fw: () => r,
  qy: () => c,
  sJ: () => o
});
var n, s, Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js"),
  r = ((n = {}).HCAPTCHA_RQDATA = "hCaptchaRqdata", n.SMITE_RQDATA = "SmiteRqdata", n.RECAPTCHA = "Recaptcha", n.RECAPTCHA_ENTERPRISE = "RecaptchaEnterprise", n),
  o = ((s = {})[s.EASY = 1] = "EASY", s[s.MODERATE = 2] = "MODERATE", s[s.DIFFICULT = 3] = "DIFFICULT", s[s.VERY_DIFFICULT = 4] = "VERY_DIFFICULT", s);
async function c(e, t) {
  await l.tn.post({
    url: i.ANM.CAPTCHA_TEST,
    body: {
      decider: e,
      options: t
    },
    rejectWithError: false
  })
}