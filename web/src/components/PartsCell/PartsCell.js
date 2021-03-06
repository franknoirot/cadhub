import { Link, routes } from '@redwoodjs/router'

import Parts from 'src/components/Parts'

export const QUERY = gql`
  query PARTS {
    parts {
      id
      title
      mainImage
      createdAt
      updatedAt
      user {
        image
        userName
      }
      Reaction {
        emote
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No parts yet. '}
      <Link to={routes.draftPart()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({
  parts,
  variables: { shouldFilterPartsWithoutImage },
}) => {
  return (
    <Parts
      parts={parts}
      shouldFilterPartsWithoutImage={shouldFilterPartsWithoutImage}
    />
  )
}
