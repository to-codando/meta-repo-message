export default ({ html, css }) => {
  const template = ({ state }) => html`
    <div>
      <p>${state.message}</p>
    </div>
  `

  const styles = () => css`
    [scope],
    [scope] > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }

    [scope] p {
      max-width: 320px;
      text-align: center;
      line-height: 1.4em;
      color: #666;
    }
  `

  return { template, styles }
}
