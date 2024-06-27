'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useTranslations } from 'next-intl';
import { ChangeEvent, useState } from 'react';

export async function askChat(query: string) {
  if (!query) {
    alert('query is not provided');
    return;
  }

  try {
    const res = await fetch('http://localhost:8001/ask-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: query }),
      cache: 'no-cache'
    });

    if (!res.ok) {
      throw new Error('Failed to get bot response!');
    }

    const data = await res.json();

    return data.response;
  } catch (error: any) {
    return error.message || 'An error occured.';
  }
}

export default function Chatbot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations('Chatbot');

  function handleInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  async function handleSendQuestion() {
    setIsLoading(true);

    const data = await askChat(query);
    data ? setResponse(data) : setResponse('Some error occured');

    setIsLoading(false);
  }

  return (
    <div className="flex flex-col gap-5">
      <h2>Chatbot</h2>
      <label htmlFor="question">{t('askChatbotQuestion')}</label>
      <Textarea onChange={e => handleInputChange(e)} name="question" id="question" />
      <Button disabled={isLoading} onClick={() => handleSendQuestion()}>
        {t('send')}
      </Button>
      <div>
        <p>{t('chatbotResponse')}</p>
        <p className="w-[50vw] text-center text-red-400">{isLoading ? t('generatingAnswer') : response}</p>
      </div>
    </div>
  );
}
