export default ({ html, css }) => {
  const template = () => html`
    <div>
      <div data-component="appMessage"></div>
    </div>
  `

  const styles = () => css`
    [scope] {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    [scope] > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      width: 100%;
      height: calc(100vh - 2em);
    }
  `

  return { template, styles }
}
