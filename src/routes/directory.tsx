import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { LocationCard, EmptyState, CategoryFilter } from '@/components/campus/cards';
import { PageHeader } from '@/components/campus/layout';
import { pageHead } from '@/components/campus/seo';
import { locations } from '@/data/campus';
export const Route=createFileRoute('/directory')({head:()=>pageHead('Campus Directory','Find campus buildings, facilities, opening hours and services.','/directory'),component:DirectoryPage});
function DirectoryPage(){const [query,setQuery]=useState('');const [category,setCategory]=useState('All');const filtered=locations.filter(l=>(category==='All'||l.category===category)&&`${l.name} ${l.building} ${l.description}`.toLowerCase().includes(query.toLowerCase()));return <><PageHeader eyebrow="Find your way" title="Around campus, made simple." description="Looking for a study spot, a quick bite or the right office? Start here."/><main className="page-wrap py-10"><input aria-label="Search campus locations" type="search" placeholder="Search locations..." value={query} onChange={e=>setQuery(e.target.value)} className="field mb-5 max-w-xl"/><CategoryFilter categories={['Study','Academic','Events','Food','Services','Residential','Recreation']} active={category} onChange={setCategory}/><p className="my-6 text-sm text-muted-foreground">{filtered.length} places found</p>{filtered.length?<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(item=><LocationCard key={item.id} item={item}/>)}</div>:<EmptyState query={query}/>}</main></>}
