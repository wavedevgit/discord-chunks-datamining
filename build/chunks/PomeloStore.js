/** Chunk was on 86142 **/
/** chunk id: 574454, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var r, i, Chunk635377 = require("./635377.js"),
  l = require.n(Chunk635377),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js");
let d = {
    taken: null,
    error: true,
    rateLimited: true
  },
  u = {
    validations: new(l())({
      max: 100,
      maxAge: 6e4
    }),
    currentUsernameInvalid: false,
    retryAfterTime: null,
    suggestions: {
      migration: {
        suggestion: {
          username: true
        },
        fetched: false,
        usernameSuggestionLoading: false
      },
      registration: {
        suggestion: {
          username: true
        },
        source: true,
        fetched: false
      }
    }
  };
class h extends(i = Chunk311907.Ay.Store) {
  isRateLimited() {
    return null != u.retryAfterTime && Date.now() < u.retryAfterTime
  }
  validate(e) {
    let t = u.validations.get(e);
    return this.isRateLimited() && (null == t || t.rateLimited) ? d : this.isRateLimited() || null == t || !t.rateLimited ? t : true
  }
  registrationUsernameSuggestion() {
    return u.suggestions.registration.suggestion.username
  }
  usernameSuggestion() {
    return u.suggestions.migration.suggestion.username
  }
  usernameSuggestionLoading() {
    return u.suggestions.migration.usernameSuggestionLoading
  }
  isCurrentUsernameInvalid() {
    return u.currentUsernameInvalid
  }
  wasRegistrationSuggestionFetched(e) {
    return u.suggestions.registration.source === e && u.suggestions.registration.fetched
  }
  wasSuggestionsFetched() {
    return u.suggestions.migration.fetched
  }
}(r = "displayName") in h ? Object.defineProperty(h, r, {
  value: "PomeloStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[r] = "PomeloStore";
let p = new h(Chunk73153.h, {
  POMELO_ATTEMPT_SUCCESS: function(e) {
    let {
      username: t,
      taken: n
    } = e;
    u.validations.set(t, {
      taken: n
    })
  },
  POMELO_ATTEMPT_FAILURE: function(e) {
    let {
      username: t,
      error: n,
      statusCode: r,
      retryAfter: i
    } = e;
    429 === r ? u.validations.set(t, {
      taken: null,
      error: n,
      rateLimited: true
    }, (null != i ? i : 7) * c.A.Millis.SECOND) : u.validations.set(t, {
      taken: null,
      error: n
    }), null != i && (u.retryAfterTime = Date.now() + i * c.A.Millis.SECOND)
  },
  POMELO_SUGGESTIONS_RESET: function() {
    u.suggestions.migration = {
      suggestion: {
        username: true
      },
      fetched: false,
      usernameSuggestionLoading: false
    }, u.suggestions.registration = {
      suggestion: {
        username: true
      },
      source: true,
      fetched: false
    }
  },
  POMELO_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestion: t
    } = e;
    u.suggestions.migration = {
      suggestion: t,
      fetched: true,
      usernameSuggestionLoading: false
    }, (null == t ? true : t.invalid_current_username) === true && (u.currentUsernameInvalid = true)
  },
  POMELO_SUGGESTIONS_FETCH: function(e) {
    let {
      usernameSuggestionLoading: t
    } = e;
    u.suggestions.migration.usernameSuggestionLoading = t
  },
  POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestion: t,
      source: n
    } = e;
    u.suggestions.registration = {
      suggestion: t,
      source: n,
      fetched: true
    }, (null == t ? true : t.username) != null && u.validations.set(t.username, {
      taken: false
    })
  }
})