import { questions } from '../../data/Questions'
import FrequentQuestions from './frequentQuestions'
import { Accordion } from '@chakra-ui/react'

export default function index() {
  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple mx={'40px'}>
        {questions.map((question) => {
          const { id, title, desc } = question
          return <FrequentQuestions key={id} title={title} desc={desc} />
        })}
      </Accordion>
    </>
  )
}
