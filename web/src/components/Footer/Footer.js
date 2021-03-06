import { Link, routes } from '@redwoodjs/router'

const Footer = () => {
  return (
    <div className="bg-indigo-900 text-indigo-200 font-roboto mt-20 text-sm">
      <div className="flex h-16 justify-end items-center mx-16">
        <Link className="mr-8" to={routes.codeOfConduct()}>
          Code of Conduct
        </Link>
        <Link to={routes.privacyPolicy()}>Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer
