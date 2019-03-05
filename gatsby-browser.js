/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Regionskampen har blitt oppdatert. ` +
      `Vil du laste inn den nyeste versjonen?`
  )

  if (answer === true) {
    window.location.reload()
  }
}